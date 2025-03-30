from django.shortcuts import get_object_or_404
from django.http import HttpRequest, JsonResponse
from .models import Product, Category
from django.core.serializers import serialize

def listProducts(request: HttpRequest) -> JsonResponse:
    data = list(Product.objects.values())
    return JsonResponse(data, safe=False)

def getProduct(request: HttpRequest, id: int) -> JsonResponse:
    product = get_object_or_404(Product, id=id)
    if not product:
        return JsonResponse({"error": "No products found"}, status=404)

    product_json = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": product.category.id
    }

    return JsonResponse(product_json, safe=False)

def listCategories(request: HttpRequest) -> JsonResponse:
    categories = list(Category.objects.values())  
    return JsonResponse(categories, safe=False)

def getCategoryProduct(request: HttpRequest, id: int) -> JsonResponse:
    products = Product.objects.filter(category_id=id)

    if not products.exists():
        return JsonResponse({"error": "No products found for this category"}, status=404)

    product_json = [{
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": product.category.id
    } for product in products]
    
    return JsonResponse(product_json, safe=False)

def listCategoryProducts(request: HttpRequest, id: int) -> JsonResponse:
    products = list(Product.objects.filter(category_id=id).values())  
    return JsonResponse(products, safe=False)
