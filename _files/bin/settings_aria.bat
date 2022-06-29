set download=--dir=%userprofile%\Desktop\WindowsBASE\
set inetset=--max-connection-per-server=16
set purges=-k20M -x16 -s16 -j25 -m0 --disk-cache=64M
set inetset2=--file-allocation=none
set contd=--continue=true
set verify=-V
@REM set connect=--enable-http-keep-alive=true --enable-http-pipelining=true
set logme=--log-level=info --log="./logs/download_log.txt"
@REM set max=--max-overall-download-limit=512K
@REM set olddn="--user-agent=Mozilla/5.0"
@REM set certbp=--check-certificate=false