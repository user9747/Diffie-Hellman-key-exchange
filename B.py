import socket
import sys
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

port=8081
s.bind(('',port))




g=56
n=2371
b=19



msg,addr=s.recvfrom(1024)
a=int(msg)


s.sendto(str((g**b)%n),(sys.argv[1],8082))
print 'B ',(g**b)%n
print('a ',a)

ab = (a**b)%n
print 'AB ',ab

msg,addr=s.recvfrom(1024)
s.sendto(str(ab),(sys.argv[1],8082))
print 'AC ',msg
ac = int(msg)

abc = (ac**b)%n
print 'ABC ',abc



