from django.shortcuts import render
from rest_framework import viewsets
from products.models import Product
from products.serializers import ProductSerializer

def product_gallery(request):
    context = {}
    return render(request, 'products/index.html', context)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    paginate_by = 10
    paginate_by_param = 'page_size'
