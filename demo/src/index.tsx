import React from 'react';
import ReactDom from 'react-dom';

import MarkdownEditor from '../../src';

import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/gfm/gfm';

import 'github-markdown-css/github-markdown.css';

ReactDom.render(<MarkdownEditor  cmOptions={{ mode: 'gfm' }} value="@[TOC](centos7下mysql5.7的安装与配置)

# 1. 安装

- 卸载centos7自带的MariaDB

	```bash
	yum -y remove mari*
	```

- 下载mysql

	```bash
	wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz
	mv mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz /usr/local/mysql.tar.gz
	```
- 编译安装mysql

	```bash
	yum install libaio
	groupadd mysql
	useradd -r -g mysql mysql
	tar -zxvf mysql.tar.gz
	mv mysql-5.7.22-linux-glibc2.12-x86_64 mysql
	cd mysql
	mkdir data
	chown -R mysql:mysql /usr/local/mysql
	bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data
	```
	安装过程中可能会报缺少依赖包的错误，按照错误消息使用yum工具安装相应的包即可。

	安装结果如下图所示：
![mysql安装结果](https://img-blog.csdnimg.cn/20181130150333875.png)
	==注意: 红色框内的内容为随机生成的初次登入mysql时的密码，在后面会用到，请记住。==

# 2. mysql配置

- 启用service mysql start/stop开关mysql

	```bash
	cp support-files/mysql.server /etc/init.d/mysql
	```
- 配置my.cnf

	在mysql安装目录下新建my.cnf文件，内容如下
	```bash
	[mysqld]
	init_connect='SET collation_connection = utf8_unicode_ci'
	lower_case_table_names=1
	init_connect='SET NAMES utf8'
	character-set-server=utf8
	collation-server=utf8_unicode_ci
	skip-character-set-client-handshake
	datadir=/usr/local/mysql/data
	basedir=/usr/local/mysql
	socket=/tmp/mysql.sock
	# Disabling symbolic-links is recommended to prevent assorted security risks
	symbolic-links=0
	# Settings user and group are ignored when systemd is used.
	# If you need to run mysqld under a different user or group,
	# customize your systemd unit file for mariadb according to the
	# instructions in http://fedoraproject.org/wiki/Syst
	#
	# include all files from the config directory
	#
	!includedir /etc/my.cnf.d
	```
- 配置mysql环境变量

	编辑/etc/profile，在末尾添加如下内容
	```bash
	export MYSQL_HOME=/usr/local/mysql
	export PATH=$PATH:$MYSQL_HOME/bin
	source /etc/profile
	```
- 启动并登录mysql

	```bash
	service mysql start
	mysql -u root -p
  	Enter password: 前面记住的初始密码
  	# 修改mysql登录密码
  	SET PASSWORD = PASSWORD('123456');
	```
- 远程登录授权

	```bash
	grant all privileges on *.* to username@'%' identified by 'password';
	```" />, document.getElementById('root'));
