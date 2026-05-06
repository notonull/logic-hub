---
title: Linux 达梦8数据库服务安装
copyright: CC-BY-4.0
tags:
  - linux
  - dm
---

## 1.参考

[达梦官网](https://www.dameng.com//)

[达梦技术文档](https://eco.dameng.com/document/dm/zh-cn/pm/index.html/)

[达梦Linux安装文档](https://eco.dameng.com/document/dm/zh-cn/start/dm-install-linux.html/)

## 2.环境准备

### 2.1.离线源配置（可选）

#### 2.1.1.挂载镜像

```bash
cd  /opt
mount -o loop dm8_20240116_x86_rh7_64.iso /mnt
```

## 3.安装服务

[达梦Linux安装文档](https://eco.dameng.com/document/dm/zh-cn/start/dm-install-linux.html/)
[配置实例](https://eco.dameng.com/document/dm/zh-cn/start/dm-instance-linux.html/)
```bash
su - dmdba
cd /home/dmdba/dmdbms/bin
## 配置实例
### 实例名：TEST
### SYSDBA 密码：Test,123 
### SYSADITOR 密码：Test,123
./dminit PATH=/dmdata/data DB_NAME=TEST CASE_SENSITIVE=0 BLANK_PAD_MODE=1 CHARSET=1 LENGTH_IN_CHAR=1 PAGE_SIZE=16 EXTENT_SIZE=16 LOG_SIZE=1024 SYSDBA_PWD=Test,123 SYSAUDITOR_PWD=Test,123
```

## 4.后续配置

### 4.1.创建表空间
```bash
##创建表空间
CREATE TABLESPACE TEST_EU 
DATAFILE '/dmdata/data/TEST/TEST_EU.dbf'
SIZE 256 AUTOEXTEND ON NEXT 64 MAXSIZE 4096;
```
### 4.2.创建用户
```bash
## 创建用户
CREATE USER TEST_EU IDENTIFIED BY "Test,123"  DEFAULt TABLESPACE TEST_EU;
## 设置密码不过期
ALTER USER TEST_EU LIMIT PASSWORD_LIFE_TIME TEST_EU;
ALTER USER TEST_EU LIMIT PASSWORD_LOCK_TIME TEST_EU;
```
### 4.3.创建模式名
```bash
##创建模式名
CREATE SCHEMA TEST_EU AUTHORIZATION TEST_EU;
/
```

## 常用命令

```bash
cd /home/dmdba/dmdbms/bin/ 
./disql SYSDBA/Test,123 >/home/**/**.sql

```

