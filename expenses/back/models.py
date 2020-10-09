from django.db import models


class Expenses(models.Model):
    name=models.CharField(max_length=120)
    content=models.TextField()
    amount=models.PositiveIntegerField()
    date=models.DateField()

    
    def __str__(self):
        return self.name
