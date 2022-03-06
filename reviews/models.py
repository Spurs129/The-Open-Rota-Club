from django.db import models

# Create your models here.
class Review(models.Model):
  member = models.ForeignKey(
    "members.Member",
    related_name = "reviews",
    on_delete= models.CASCADE
  )
  venue = models.ForeignKey(
    "venues.Venue",
    related_name = "reviews",
    on_delete = models.CASCADE
  )
  score = models.IntegerField
  rating = models.IntegerField
  text = models.TextField(max_length=300)
  created_at = models.DateTimeField(auto_now_add=True)
  
  