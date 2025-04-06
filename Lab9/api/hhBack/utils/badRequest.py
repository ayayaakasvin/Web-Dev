from django.http import HttpRequest, HttpResponse, HttpResponseBadRequest

def IsGetMethod(req: HttpRequest) -> HttpResponse | None:
    if req.method != "GET":
        return HttpResponseBadRequest("Only GET method is allowed.")
    return None