import requests 
from datetime import datetime as dt

def _getIds():
    month = dt.now().month
    year = dt.now().year

    ids_raw_response = requests.get(f"https://techport.nasa.gov/api/projects?updatedSince={year}-{month-1}-01")

    id_response = ids_raw_response.json()

    lists = id_response['projects'][:5]
    print("ides: ",len(lists))

    return [k['projectId'] for k in lists]



def get_projects():
    ids = _getIds()
    projects = []

    for nums in ids:
        print(nums)
        raw_response = requests.get(f"https://techport.nasa.gov/api/projects/{nums}")
        response = raw_response.json()
        project = {}
        project['name'] = response['project']['title']
        project['proj_id'] = response['projectId']
        project['duration'] = f"{response['project']['startYear']}-{response['project']['endYear']}"
        raw_dest_list = response['project']['destinationType']
        project['dests'] = ", ".join(raw_dest_list)
        project['lead_org'] = response['project']['leadOrganization']['organizationName']
        raw_states_list = response['project']['states']
        states_list = [k['abbreviation'] for k in raw_states_list]
        project['states'] = ", ".join(states_list)
        project['acrn'] = response['project']['acronym']
        project['desc'] = response['project']['description']
        projects.append(project)
    
    print(len(projects))
    return projects





