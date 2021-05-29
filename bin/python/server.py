from socket import *
import threading

sock = socket(AF_INET,SOCKET_STREAM)

bind('0.0.0.0',8000)

listen(1)
 
connection = []

while True:

     c, a = accept()
     cThread = threading.Thread(target=handler)
     cThread.daemon = True
 

