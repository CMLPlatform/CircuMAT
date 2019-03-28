from circumat.consumers import CircumatConsumer
from channels.routing import URLRouter, ProtocolTypeRouter
from channels.auth import AuthMiddlewareStack
from django.urls import path

channel_routing = ProtocolTypeRouter({

    "websocket": AuthMiddlewareStack(
        URLRouter([
            path('circumat/', CircumatConsumer),

        ]),
    ),
})
