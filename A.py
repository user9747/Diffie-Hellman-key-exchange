import socket
import sys

s= socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

port = 8080
s.bind(('',port))


g=5635
n=237354
a=13


s.sendto(str((g**a)%n),(sys.argv[1],8081))
msg,addr=s.recvfrom(1024)
c = int(msg)
print 'A ',(g**a)%n
print('c ',c)
ac = (c**a)%n
print 'AC ',ac


s.sendto(str(ac),(sys.argv[1],8081))
msg,addr=s.recvfrom(1024)
print 'BC',msg
bc = int(msg)

abc = (bc**a)%n
print 'ABC ',abc
s.close()