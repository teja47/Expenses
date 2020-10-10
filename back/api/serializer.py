from rest_framework import serializers
from back.models import Expenses

class PosterSerializer(serializers.ModelSerializer):
    class Meta:
        model =Expenses
        fields = ('id','name','content','date','amount')
