import socket
import sys
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

port=8082
s.bind(('',port))


g=5635
n=237354
c=17



msg,addr=s.recvfrom(1024)
b = int(msg)

s.sendto(str((g**c)%n),(sys.argv[1],8080))
print "C",(g**c)%n
print('b ',b)

bc = (b**c)%n
print 'BC ',bc

msg,addr=s.recvfrom(1024)
s.sendto(str(bc),(sys.argv[1],8080))
print 'AB',msg
ab = int(msg)

abc = (ab**c)%n
print 'ABC ',abc