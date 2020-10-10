from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView
from .serializer import PosterSerializer
from back.models import Expenses
class PosterListView(ListAPIView):
    queryset = Expenses.objects.all()
    serializer_class=PosterSerializer

class PosterDetailView(RetrieveAPIView):
    queryset = Expenses.objects.all()
    serializer_class=PosterSerializer
class PosterCreateView(CreateAPIView):
    queryset = Expenses.objects.all()   
    serializer_class=PosterSerializer
class PosterUpdateView(UpdateAPIView):
    queryset = Expenses.objects.all()   
    serializer_class=PosterSerializer
class PosterDeleteView(DestroyAPIView):
    queryset = Expenses.objects.all()   
    serializer_class=PosterSerializer