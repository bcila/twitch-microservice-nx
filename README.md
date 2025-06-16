# twitch-clone-microservices

| Service            | Port  | Transport |
| :----------------- | :---: | --------: |
| gateway            | 3000  |   GraphQL |
| auth-service       | 50051 |      gRPC |
| user-service       | 50052 |      gRPC |
| stream-service     | 50053 |      gRPC |
| rtmp-server(nginx) | 1935  |      rtmp |
