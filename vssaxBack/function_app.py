import azure.functions as func
import datetime
import json
import logging
from apod import get_apod
from projects import get_projects
from neo import get_neo_data

app = func.FunctionApp()

@app.route(route="vssaxBackend", auth_level=func.AuthLevel.FUNCTION)
def vssaxBackend(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
    
@app.route(route='apod_data', auth_level=func.AuthLevel.FUNCTION)
def apod(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(
            json.dumps(get_apod()),
            status_code=200,
            mimetype="application/json"
        )

@app.route(route='projects', auth_level=func.AuthLevel.FUNCTION)
def projects(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(
            json.dumps(get_projects()),
            status_code=200,
            mimetype="application/json"
        )

@app.route(route='neo_data', auth_level=func.AuthLevel.FUNCTION)
def neos(req: func.HttpRequest) -> func.HttpResponse:
    neo_list_class = get_neo_data()
    neo_list = [neo.to_dict() for neo in neo_list_class]
    return func.HttpResponse(
            json.dumps(neo_list),
            status_code=200,
            mimetype="application/json"
        )