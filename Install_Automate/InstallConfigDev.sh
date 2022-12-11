#!/bin/bash

echo Updating repositories..
if ! sudo apt update;
then
	echo "Repositories could not be updated. Check your file /etc/apt/sources.list"
fi

 echo "Upgrade made successfully"
 echo "Updating packages already installed"

if ! sudo apt upgrade;
then
	echo "Erro ao autalizar"
fi

if ! sudo apt install build-essential;
then
	echo "Installation error check name or software requirements"
fi	

if ! sudo apt install git -y;
then
	echo "Installation error check name or software requirements"
fi

if ! sudo apt install terminator -y;
then
	echo "Installation error check name or software requirements"
fi

if !  sudo apt install python3.9 -y && sudo apt install python3-pip -y;
then
	echo "Installation error check name or software requirements"
fi

if !  sudo apt install virtualbox -y;
then
	echo "Installation error check name or software requirements"
fi

if ! sudo apt install htop -y;
then
	echo "Install Softwarer Monitor System"
fi

if ! sudo apt install tmux -y;
then
	echo "Virtual Terminals"
fi

if ! sudo apt install scanner -y;
then
	echo "Other solution for virtual terminals"
fi

echo FNISH

