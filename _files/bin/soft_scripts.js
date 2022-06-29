const path = require("path");
const url = require('url')
const { app, shell } = require("electron");
var dirname = process.env.INIT_CWD

const soft1=document.getElementById('soft1')
soft1.addEventListener('click',function(event){
shell.openPath('cmd.exe')
})

const soft2=document.getElementById('soft2')
soft2.addEventListener('click',function(event){
const soft2 = url.format({
 pathname: path.join(__dirname, '/sd/sdown_baf.exe'),
 protocol: 'file:',
 slashes: true
})
shell.openPath(soft2);  
})

const soft3=document.getElementById('soft3')
soft3.addEventListener('click',function(event){
const runsoft3 = url.format({
pathname: path.join(__dirname, '/sd/sdown_ib.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft3); 
})

const soft4=document.getElementById('soft4')
soft4.addEventListener('click',function(event){
const runsoft4 = url.format({
pathname: path.join(__dirname, '/sd/sdown_wcd.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft4); 
})

const soft5=document.getElementById('soft5')
soft5.addEventListener('click',function(event){
const runsoft5 = url.format({
pathname: path.join(__dirname, '/sd/sdown_mti.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft5); 
})

const soft6=document.getElementById('soft6')
soft6.addEventListener('click',function(event){
const runsoft6 = url.format({
pathname: path.join(__dirname, '/sd/sdown_dism1.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft6); 
})

const soft7=document.getElementById('soft7')
soft7.addEventListener('click',function(event){
const runsoft7 = url.format({
pathname: path.join(__dirname, '/sd/sdown_dism2.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft7); 
})

const soft8=document.getElementById('soft8')
soft8.addEventListener('click',function(event){
const runsoft8 = url.format({
pathname: path.join(__dirname, '/sd/sdown_rfs.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft8); 
})

const soft9=document.getElementById('soft9')
soft9.addEventListener('click',function(event){
const runsoft9 = url.format({
pathname: path.join(__dirname, '/sd/sdown_wsfu1.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft9); 
})

const soft10=document.getElementById('soft10')
soft10.addEventListener('click',function(event){
const runsoft10 = url.format({
pathname: path.join(__dirname, '/sd/sdown_wsfu2.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft10); 
})

const soft11=document.getElementById('soft11')
soft11.addEventListener('click',function(event){
const runsoft11 = url.format({
pathname: path.join(__dirname, '/7z/7zFM.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft11); 
})

const soft12=document.getElementById('soft12')
soft12.addEventListener('click',function(event){
const runsoft12 = url.format({
pathname: path.join(__dirname, '/sd/sdown_mde1.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft12); 
})

const soft13=document.getElementById('soft13')
soft13.addEventListener('click',function(event){
const runsoft13 = url.format({
pathname: path.join(__dirname, '/sd/sdown_mde2.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft13); 
})

const soft14=document.getElementById('soft14')
soft14.addEventListener('click',function(event){
const runsoft14 = url.format({
pathname: path.join(__dirname, '/sd/sdown_cc.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft14); 
})

const soft15=document.getElementById('soft15')
soft15.addEventListener('click',function(event){
const runsoft15 = url.format({
pathname: path.join(__dirname, '/sd/sdown_qe.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft15); 
})

const soft16=document.getElementById('soft16')
soft16.addEventListener('click',function(event){
const runsoft16 = url.format({
pathname: path.join(__dirname, '/sd/sdown_sk.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft16); 
})

const soft17=document.getElementById('soft17')
soft17.addEventListener('click',function(event){
const runsoft17 = url.format({
pathname: path.join(__dirname, '/sd/sdown_pk.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft17); 
})

const soft18=document.getElementById('soft18')
soft18.addEventListener('click',function(event){
const runsoft18 = url.format({
pathname: path.join(__dirname, '/sd/sdown_ul.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft18); 
})

const soft19=document.getElementById('soft19')
soft19.addEventListener('click',function(event){
const runsoft19 = url.format({
pathname: path.join(__dirname, '/sd/sdown_sp.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft19); 
})

const soft20=document.getElementById('soft20')
soft20.addEventListener('click',function(event){
const runsoft20 = url.format({
pathname: path.join(__dirname, '/sd/sdown_gu.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft20); 
})

const soft21=document.getElementById('soft21')
soft21.addEventListener('click',function(event){
const runsoft21 = url.format({
pathname: path.join(__dirname, '/sd/sdown_ccp.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft21); 
})

const soft22=document.getElementById('soft22')
soft22.addEventListener('click',function(event){
const runsoft22 = url.format({
pathname: path.join(__dirname, '/sd/sdown_tc.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft22); 
})

const soft23=document.getElementById('soft23')
soft23.addEventListener('click',function(event){
const runsoft23 = url.format({
pathname: path.join(__dirname, '/sd/sdown_ru.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft23); 
})

const soft24=document.getElementById('soft24')
soft24.addEventListener('click',function(event){
const runsoft24 = url.format({
pathname: path.join(__dirname, '/sd/sdown_toc.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft24); 
})

const soft25=document.getElementById('soft25')
soft25.addEventListener('click',function(event){
const runsoft25 = url.format({
pathname: path.join(__dirname, '/sd/sdown_ddu.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft25); 
})

const soft26=document.getElementById('soft26')
soft26.addEventListener('click',function(event){
const runsoft26 = url.format({
pathname: path.join(__dirname, '/sd/sdown_dd.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft26); 
})

const soft27=document.getElementById('soft27')
soft27.addEventListener('click',function(event){
const runsoft27 = url.format({
pathname: path.join(__dirname, '/sd/sdown_db2.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft27); 
})

const soft28=document.getElementById('soft28')
soft28.addEventListener('click',function(event){
const runsoft28 = url.format({
pathname: path.join(__dirname, '/sd/sdown_vm.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft28); 
})

const soft29=document.getElementById('soft29')
soft29.addEventListener('click',function(event){
const runsoft29 = url.format({
pathname: path.join(__dirname, '/sd/sdown_ab.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft29); 
})

const soft30=document.getElementById('soft30')
soft30.addEventListener('click',function(event){
const runsoft30 = url.format({
pathname: path.join(__dirname, '/sd/sdown_ar.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft30); 
})

const soft31=document.getElementById('soft31')
soft31.addEventListener('click',function(event){
const runsoft31 = url.format({
pathname: path.join(__dirname, '/sd/sdown_b4.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft31); 
})

const soft32=document.getElementById('soft32')
soft32.addEventListener('click',function(event){
const runsoft32 = url.format({
pathname: path.join(__dirname, '/sd/sdown_bt.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft32); 
})

const soft34=document.getElementById('soft34')
soft34.addEventListener('click',function(event){
const runsoft34 = url.format({
pathname: path.join(__dirname, '/sd/sdown_cz.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft34); 
})

const soft35=document.getElementById('soft35')
soft35.addEventListener('click',function(event){
const runsoft35 = url.format({
pathname: path.join(__dirname, '/sd/sdown_dc.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft35); 
})

const soft36=document.getElementById('soft36')
soft36.addEventListener('click',function(event){
const runsoft36 = url.format({
pathname: path.join(__dirname, '/sd/sdown_fb.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft36); 
})

const soft37=document.getElementById('soft37')
soft37.addEventListener('click',function(event){
const runsoft37 = url.format({
pathname: path.join(__dirname, '/sd/sdown_gz.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft37); 
})

const soft38=document.getElementById('soft38')
soft38.addEventListener('click',function(event){
const runsoft38 = url.format({
pathname: path.join(__dirname, '/sd/sdown_mav.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft38); 
})

const soft39=document.getElementById('soft39')
soft39.addEventListener('click',function(event){
const runsoft39 = url.format({
pathname: path.join(__dirname, '/sd/sdown_mr32.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft39); 
})

const soft40=document.getElementById('soft40')
soft40.addEventListener('click',function(event){
const runsoft40 = url.format({
pathname: path.join(__dirname, '/sd/sdown_mr64.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft40); 
})

const soft41=document.getElementById('soft41')
soft41.addEventListener('click',function(event){
const runsoft41 = url.format({
pathname: path.join(__dirname, '/sd/sdown_oo.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft41); 
})

const soft42=document.getElementById('soft42')
soft42.addEventListener('click',function(event){
const runsoft42 = url.format({
pathname: path.join(__dirname, '/sd/sdown_pe.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft42); 
})

const soft43=document.getElementById('soft43')
soft43.addEventListener('click',function(event){
const runsoft43 = url.format({
pathname: path.join(__dirname, '/sd/sdown_rcva.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft43); 
})

const soft44=document.getElementById('soft44')
soft44.addEventListener('click',function(event){
const runsoft44 = url.format({
pathname: path.join(__dirname, '/sd/sdown_pfr.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft44); 
})

const soft45=document.getElementById('soft45')
soft45.addEventListener('click',function(event){
const runsoft45 = url.format({
pathname: path.join(__dirname, '/sd/sdown_sf.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft45); 
})

const soft46=document.getElementById('soft46')
soft46.addEventListener('click',function(event){
const runsoft46 = url.format({
pathname: path.join(__dirname, '/sd/sdown_wub.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft46); 
})

const soft47=document.getElementById('soft47')
soft47.addEventListener('click',function(event){
const runsoft47 = url.format({
pathname: path.join(__dirname, '/sd/sdown_rf.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft47); 
})

const soft48=document.getElementById('soft48')
soft48.addEventListener('click',function(event){
const runsoft48 = url.format({
pathname: path.join(__dirname, '/sd/sdown_qs.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft48); 
})

const soft49=document.getElementById('soft49')
soft49.addEventListener('click',function(event){
shell.openPath('taskschd.msc')
})
const soft50=document.getElementById('soft50')
soft50.addEventListener('click',function(event){
shell.openPath('regedit.exe')
})
const soft51=document.getElementById('soft51')
soft51.addEventListener('click',function(event){
shell.openPath('services.msc')
})
const soft52=document.getElementById('soft52')
soft52.addEventListener('click',function(event){
shell.openPath('explorer.exe')
})
const soft53=document.getElementById('soft53')
soft53.addEventListener('click',function(event){
shell.openPath('msconfig.exe')
})
const soft54=document.getElementById('soft54')
soft54.addEventListener('click',function(event){
shell.openPath('msinfo32.exe')
})
const soft55=document.getElementById('soft55')
soft55.addEventListener('click',function(event){
shell.openPath('notepad.exe')
})
const soft56=document.getElementById('soft56')
soft56.addEventListener('click',function(event){
shell.openPath('diskmgmt.msc')
})
const soft57=document.getElementById('soft57')
soft57.addEventListener('click',function(event){
shell.openPath('devmgmt.msc')
})
const soft58=document.getElementById('soft58')
soft58.addEventListener('click',function(event){
shell.openPath('lusrmgr.msc')
})
const soft59=document.getElementById('soft59')
soft59.addEventListener('click',function(event){
shell.openPath('gpedit.msc')
})
const soft60=document.getElementById('soft60')
soft60.addEventListener('click',function(event){
shell.openPath('secpol.msc')
})
const soft61=document.getElementById('soft61')
soft61.addEventListener('click',function(event){
shell.openPath('eventvwr.msc')
})
const soft62=document.getElementById('soft62')
soft62.addEventListener('click',function(event){
shell.openPath('perfmon.exe')
})
const soft63=document.getElementById('soft63')
soft63.addEventListener('click',function(event){
shell.openPath('cleanmgr.exe')
})

const soft64=document.getElementById('soft64')
soft64.addEventListener('click',function(event){
const runsoft64 = url.format({
pathname: path.join(__dirname, '/sd/sdown_sysc.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft64); 
})

const soft65=document.getElementById('soft65')
soft65.addEventListener('click',function(event){
shell.openPath('appwiz.cpl')
})

const soft66=document.getElementById('soft66')
soft66.addEventListener('click',function(event){
const runsoft66 = url.format({
pathname: path.join(__dirname, '/sd/sdown_86b.exe'),
protocol: 'file:',
slashes: true
})
shell.openPath(runsoft66); 
})

