
from django.contrib import admin
from django.urls import path,include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
      path('api-auth/', include('rest_framework.urls')),
      path('admin/', admin.site.urls),
      path('api/',include('back.api.urls')),
      re_path('.*',TemplateView.as_view(template_name='index.html')),
     
]

urlpatterns=urlpatterns + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
