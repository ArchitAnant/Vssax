import requests 
from datetime import datetime as dt

def _getIds():
    month = dt.now().month
    year = dt.now().year

    ids_raw_response = requests.get(f"https://techport.nasa.gov/api/projects?updatedSince={year}-{month-1}-01")

    id_response = ids_raw_response.json()

    lists = id_response['projects'][:5]

    return [k['projectId'] for k in lists]



def get_projects():
    ids = _getIds()
    projects = []

    for nums in ids:
        print(nums)
        raw_response = requests.get(f"https://techport.nasa.gov/api/projects/{nums}")
        response = raw_response.json()
        project = {
            'name': None,
            'proj_id': None,
            'duration': None,
            'dests': None,
            'lead_org': None,
            'states': None,
            'acrn': None,
            'desc': None
        }
        try:
            project['name'] = response['project']['title']
        except:
            project['name'] = "N/A"
        
        try:
            project['proj_id'] = response['projectId']
        except:
            project['proj_id'] = "N/A"
        
        try:
            project['duration'] = f"{response['project']['startYear']}-{response['project']['endYear']}"
        except:
            project['duration'] = "N/A"

        try:
            raw_dest_list = response['project']['destinationType']
            project['dests'] = ", ".join(raw_dest_list)
        except:
            project['dests'] = "N/A"

        try:
            project['lead_org'] = response['project']['leadOrganization']['organizationName']
        except:
            project['lead_org'] = "N/A"

        try:
            raw_states_list = response['project']['states']
            states_list = [k['abbreviation'] for k in raw_states_list]
            project['states'] = ", ".join(states_list)
        except:
            project['states'] = "N/A"

        try:
            project['acrn'] = response['project']['acronym']
        except:
            project['acrn'] = "N/A"

        try:
            project['desc'] = response['project']['description'].replace("<p>", "").replace("</p>", "").replace("<strong>", "").replace("</strong>", "")
        except:
            project['desc'] = "N/A"

        projects.append(project)
    
    return projects





