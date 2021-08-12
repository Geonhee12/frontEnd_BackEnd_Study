FROM node:14
#이미지 받기
# :은 태그이지만 버전을 나타내기도 함.

# docker build . -t study/hello-node:step1
# .은 위치 -t는 도커 이미지의 이름과 태그를 지정 
# 태그는 필수가 아니다

# docker create -it --name doc-node-test study/hello-node:step1
# i는 interactive하게 통신을 하겠다 t는 tty를 통해 터미널로 들어간다 

# docker start id(name, images) 시작
# exec -it 실행
# apt-get update
# apt-get install vim
# apt-get install nano
# 위처럼 복잡하게 만들 때마다 입력할 것이 아니라 아래의 명령문을 사용

# 컨테이너는 rm 이미지는 rmi

# 컨테이너 생성 시 먼저 실행 후 생성해주세요라는 명령문이며
# 한줄로 작성할 수 있지만 개행해서 작성
# exe보다 ssh로 접속하여 더 일반적이고 현실적이다
RUN apt-get update && \
apt-get install -y vim nano net-tools openssh-server 
# \은 실행하라라는 뜻 
# docker create -p 8080:8080 -p 8022:22 -it --name
# 도커의 8080포트에 ssh 8080 포트로하고 8022포트에 22ssh로 함


# 나노나 vim에서 아이디 주석풀고 yes 달고 
# passwd root 해서 패스워드 달고
# 나와서 exit하고 ssh root@localhost -p 8022 입력하여 ssh 접속
# service ssh start
# exit 하고 ssh root@localhost -p 8022
# logout


# 로컬과 컨테이너 내부를 구분해야함
# 로컬의 ip를 알아내서 해야 ssh root@192.168.25.35 -p 8022로 가상의 가상으로 접속할 수 있음
# 서로 다른 콘테이너를 만들고 독립된 시스템처럼 서로 통신한다 실제로 데이터를 제어할 수 있게 가능
# 