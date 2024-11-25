import requests
from api_keys import nasa_api_key
        
def get_apod():
    raw_request_response = requests.get(f"https://api.nasa.gov/planetary/apod?api_key={nasa_api_key}")
    json_raw = raw_request_response.json()

    apod = {}
    apod['title'] = json_raw['title']
    apod['explanation'] = json_raw['explanation']
    apod['media_type'] = json_raw['media_type']
    if apod['media_type'] == 'image':
        apod['high_link'] = json_raw['hdurl']
        apod['low_link'] = json_raw['url']
    if apod['media_type'] == 'video':
        apod['high_link'] = json_raw['url']
    apod['date'] = json_raw['date']

    return apod
