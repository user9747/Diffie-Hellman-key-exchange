import socket
import sys

s= socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

port = 8080
s.bind(('',port))


g=56
n=2371
a=13
print 'G ',g
print 'n',n
print 'Private Key: ',a


s.sendto(str((g**a)%n),(sys.argv[1],8081))
msg,addr=s.recvfrom(1024)
c = int(msg)
print 'Public Key: ',(g**a)%n

ac = (c**a)%n
print 'AC ',ac


s.sendto(str(ac),(sys.argv[1],8081))
msg,addr=s.recvfrom(1024)
print 'BC',msg
bc = int(msg)

abc = (bc**a)%n
print 'Key: ',abc
s.close()