import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

# Setup
options = Options()
# options.headless = True  # Uncomment if you want to run it without opening browser
driver = webdriver.Chrome(options=options)

driver.get("https://nssc.in/team")

team_data = []

try:
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "our-team"))
    )

    soup = BeautifulSoup(driver.page_source, "html.parser")
    all_members = soup.find_all('div', class_='our-team')

    for member in all_members:
        img_tag = member.find('img')
        img_src = img_tag['src'] if img_tag else ''

        name_tag = member.find('p', class_='name')
        title_tag = member.find('p', class_='title')
        name = name_tag.get_text(strip=True) if name_tag else ''
        title = title_tag.get_text(strip=True) if title_tag else ''

        social_links = []
        social_ul = member.find('ul', class_='team-social')
        if social_ul:
            for a in social_ul.find_all('a'):
                href = a.get('href')
                if href:
                    social_links.append(href)

        team_data.append({
            'name': name,
            'title': title,
            'image': img_src,
            'socials': social_links
        })

finally:
    driver.quit()

# Save to JSON file
with open('nssc_team.json', 'w', encoding='utf-8') as f:
    json.dump(team_data, f, ensure_ascii=False, indent=2)

print("✅ Data saved to nssc_team.json")
