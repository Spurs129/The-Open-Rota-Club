from django.db import models

# Create your models here.

from django.db import models

# Create your models here.

class Member(models.Model):
    name = models.CharField(max_length=50)
    handicap = models.IntegerField(default=None)
    

    # update admin string for individual record
    def __str__(self):
        return f"{self.name}"
