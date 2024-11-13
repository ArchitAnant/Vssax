import requests
from api_keys import nasa_api_key
from datetime import datetime,timedelta

class neo:
    def __init__(self,name,diameter,closest_approach,velocity,distance,isThreat):
        self.name = name
        self.diameter = diameter
        self.closest_approach = closest_approach
        self.velocity = velocity
        self.distance = distance
        self.isThreat = isThreat
    
    def to_dict(self):
        return {
            "name": self.name,
            "diameter": self.diameter,
            "closest_approach": self.closest_approach,
            "velocity": self.velocity,
            "distance": self.distance,
            "isThreat": self.isThreat
        }
    
    def __str__(self):
        return(f"NEO:\nName: {self.name}\nDiameter: {self.diameter}\nClosest Approach: {self.closest_approach}\nVelocity: {self.velocity} km/s\nDistance: {self.distance} AU\nIs Threat: {self.isThreat}\n")

def get_dates():
    current_date = datetime.now()
    today_date = (current_date+timedelta(days=-1)).strftime("%Y-%m-%d")
    new_date = current_date + timedelta(days=5)
    next_date = new_date.strftime("%Y-%m-%d")

    return (today_date,next_date)

def get_neo_data():
    dates = get_dates()
    val = requests.get(f"https://api.nasa.gov/neo/rest/v1/feed?start_date={dates[0]}&end_date={dates[1]}&api_key={nasa_api_key}")
    dates_list = list(val.json()["near_earth_objects"].keys())

    neos = []

    for i in dates_list:
        list_of_neos = val.json()["near_earth_objects"][i]
        for k in range(len(list_of_neos)):
            name = list_of_neos[k]['name']
            min_diameter = list_of_neos[k]['estimated_diameter']['kilometers']['estimated_diameter_min']
            max_diameter = list_of_neos[k]['estimated_diameter']['kilometers']['estimated_diameter_max']
            diameter = f"{min_diameter:.5f} - {max_diameter:.5f} km"
            closest_approach_raw = list_of_neos[k]['close_approach_data'][0]['close_approach_date_full']
            closest_approach = f"{closest_approach_raw.split(' ')[0].replace('-',' ')} at {closest_approach_raw.split(' ')[1]} UTC"
            velocity = f"{eval(list_of_neos[k]['close_approach_data'][0]['relative_velocity']['kilometers_per_second']):.2f} km/s"
            dist = f"~{eval(list_of_neos[k]['close_approach_data'][0]['miss_distance']['astronomical']):.4f} AU"
            isSafe = list_of_neos[k]['is_potentially_hazardous_asteroid']
            neos.append(neo(name,diameter,closest_approach,velocity,dist,isSafe))


    sorted_neo = sorted(neos,key=lambda a:a.distance)
    return sorted_neo[:5]

