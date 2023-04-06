window.onload = function () {
    let boxs =document.querySelector('.box')
    // 获取四个绿柱子
    let z08s = document.querySelector('.z08')
    let z22s = document.querySelector('.z22')
    let z14s = document.querySelector('.z14')
    let z11s = document.querySelector('.z11')
    // 获取鸽子
    let gz1s = document.querySelector('.gz1')
    let g1s = document.querySelector('.g1')
    // 获取金币，信号，电话柱
    let dhs = document.querySelectorAll('.dh')
    let dhzs = document.querySelector('.dhz')
    let xhzs = document.querySelector('.xhz')
    // 获取要升起的柱子
    let ers = document.querySelectorAll('.er')
    let sans = document.querySelectorAll('.san')
    // 获取金币，信号，电话
    let zbzs = document.querySelector('.zbz')
    let z16s = document.querySelector('.z16')
    let z30s = document.querySelector('.z30')
    let z24s = document.querySelector('.z24')
    // 获取第一页面元素
    let jts = document.querySelector('.jt')
    let ones = document.querySelector('.one')
    let twos = document.querySelector('.two')
    let wbs =document.querySelector('.wb')
    // 获取鸽子音频
    let audio=document.getElementsByTagName('audio')[0]
    let feis =document.querySelector('.fei')
    let gz2s =document.querySelector('.gz2')
    // 获取飞升音频
    let audio2=document.querySelector('.audio2')
    // 获取第三页面
    let threes=document.querySelector('.three')
    // 获取文字
    let bts =document.querySelector('.bt')
    let bt1s=document.querySelector('.bt1')
    let tu1s=document.querySelector('.tu1')
    let bt2s=document.querySelector('.bt2')
    let bt3s=document.querySelector('.bt3')
    // 获取光圈
    let gq1s=document.querySelector('.gq1')
    let gq2s=document.querySelector('.gq2')
    let gq3s=document.querySelector('.gq3')
    let gq4s=document.querySelector('.gq4')
    let audio3s=document.querySelector('.audio3')
    let falg = true
    jts.ontouchmove = function () {
        ones.style.display = 'none'
        twos.style.display = 'block'
        setTimeout(function(){
            tu1s.style.display='none'
            bts.style.display='block'
            gq1s.style.display='block'
        },5500)
        setTimeout(function(){
            audio3s.play()
        },1500)
        let cont =0,b=0,c=0;
        // 第一段路程
        z08s.onclick = function () {
            gq1s.style.display='none'
            if (falg) {
                falg = false
                cont++
                if(cont==1){
                    audio.play()
                    gz1s.style.animationName = 'gz1'
                gz1s.style.animationDuration = '6732ms'
                let i = 1
                let yi = setInterval(function () {
                    if (i > 5) i = 1
                    g1s.setAttribute('src', '../image/gz' + i + '.png')
                    i++
                }, 100)
                setTimeout(function () {
                    let i = 11
                    let j = 0
                    clearInterval(yi)
                    let er = setInterval(function () {
                        if (i > 15) i = 11
                        g1s.setAttribute('src', '../image/gz' + i + '.png')
                        i++
                        j++
                        if (j == 11) clearInterval(er)
                    }, 100)
                }, 1615)
                setTimeout(function () {
                    let i = 1
                    let j = 0
                    let san = setInterval(function () {
                        if (i > 5) i = 1
                        g1s.setAttribute('src', '../image/gz' + i + '.png')
                        i++
                        j++
                        if (j == 26) clearInterval(san)
                    }, 100)
                }, 2692)
                setTimeout(function () {
                    let i = 11
                    let j = 0
                    let san = setInterval(function () {
                        if (i > 15) i = 11
                        g1s.setAttribute('src', '../image/gz' + i + '.png')
                        i++
                        j++
                        if (j == 16) {
                            clearInterval(san)
                            falg = true
                        }
                    }, 100)
                }, 5250)
                setTimeout(function(){
                    audio.pause()
                },6732)
                setTimeout(function () {
                    z30s.style.animationName = 'tz'
                    dhzs.style.animationName = 'tz'
                    bt1s.style.display='block'
                    bts.style.display='none'
                }, 6732)
                setTimeout(function () {
                    dhs.forEach(function (i) {
                        i.style.transform = 'translateY(0rem)'
                        i.style.animationName = 'tz'
                    })
                    audio3s.play()
                }, 9000)
                setTimeout(function(){
                    gq2s.style.display='block'
                },13000)
                }else{
                    gz1s.style.animationName = ''
                    gz1s.style.left='1.46rem'
                    gz1s.style.bottom='4.05rem'
                    falg=true
                }
            }
        }
        // 第二段路程
        z22s.onclick = function () {
            gq2s.style.display='none'
            if (falg) {
                falg = false
                b++
                if(b==1){
                    audio.play()
                gz1s.style.animationName = 'gz2'
                gz1s.style.animationDuration = '3869ms'
                let i = 1
                let yi = setInterval(function () {
                    if (i > 3) i = 1
                    g1s.setAttribute('src', '../image/gz' + i + '.png')
                    i++
                }, 100)
                setTimeout(function () {
                    let i = 11
                    let j = 0
                    clearInterval(yi)
                    let er = setInterval(function () {
                        if (i > 15) i = 11
                        g1s.setAttribute('src', '../image/gz' + i + '.png')
                        i++
                        j++
                        if (j == 36) {
                            clearInterval(er)
                            falg = true
                        }
                    }, 100)
                }, 464)
                setTimeout(function(){
                    audio.pause()
                },4000)
                setTimeout(function () {
                    z24s.style.animationName = 'tz'
                    xhzs.style.animationName = 'tz'
                    bt1s.style.display='none'
                    bt2s.style.display='block'
                }, 3869)
                setTimeout(function () {
                    ers.forEach(function (i) {
                        i.style.transform = 'translateY(0rem)'
                        i.style.animationName = 'tz'
                    })
                    audio3s.play()
                }, 6000)
                setTimeout(function(){
                    gq3s.style.display='block'
                },9500)
                }else{
                    gz1s.style.animationName = ''
                    gz1s.style.left='3.95rem'
                    gz1s.style.bottom='6.02rem'
                    falg=true
                }
        }
        }
        // 第三段路程
        z14s.onclick = function () {
            gq3s.style.display='none'
            if (falg) {
                falg = false
                c++
                if(c==1){
                    audio.play()
                gz1s.style.animationName = 'gz3'
                gz1s.style.animationDuration = '4369ms'
                let i = 21
                let yi = setInterval(function () {
                    if (i > 25) i = 21
                    g1s.setAttribute('src', '../image/gz' + i + '.png')
                    i++
                }, 100)
                setTimeout(function () {
                    let i = 31
                    let j = 0
                    clearInterval(yi)
                    let er = setInterval(function () {
                        if (i > 35) i = 31
                        g1s.setAttribute('src', '../image/gz' + i + '.png')
                        i++
                        j++
                        if (j == 12) clearInterval(er)
                    }, 100)
                }, 1487)
                setTimeout(function () {
                    let i = 21
                    let j = 0
                    let san = setInterval(function () {
                        if (i > 25) i = 21
                        g1s.setAttribute('src', '../image/gz' + i + '.png')
                        i++
                        j++
                        if (j == 16) {
                            clearInterval(san)
                            falg = true
                        }
                    }, 100)
                }, 2636)
            setTimeout(function(){
                audio.pause()
            },4369)
            setTimeout(function () {
                z16s.style.animationName = 'tz'
                zbzs.style.animationName = 'tz'
                bt3s.style.display='block'
                bt2s.style.display='none'
            }, 4369)
            setTimeout(function () {
                sans.forEach(function (i) {
                    i.style.transform = 'translateY(0rem)'
                    i.style.animationName = 'tz'
                })
                audio3s.play()
            }, 6000)
            setTimeout(function(){
                gq4s.style.display='block'
            },9000)
            }else{
                gz1s.style.animationName = ''
                gz1s.style.left='5.43rem'
                gz1s.style.bottom='3.48rem'
                falg=true
            }
        }
        }
        // 第四段路程
        z11s.onclick = function () {
            gq4s.style.display='none'
            if (falg) {
                falg = false
                audio.play()
                gz1s.style.animationName = 'gz4'
                gz1s.style.animationDuration = '2850ms'
                setTimeout(() => {
                audio.pause()
                }, 2900);
                let i = 31
                let yi = setInterval(function () {
                    if (i >= 35) i = 31
                    g1s.setAttribute('src', '../image/gz' + i + '.png')
                    i++
                }, 100)
                setTimeout(function () {
                    let i = 1
                    let j = 0
                    clearInterval(yi)
                    let er = setInterval(function () {
                        if (i > 3) i = 1
                        g1s.setAttribute('src', '../image/gz' + i + '.png')
                        i++
                        j++
                        if (j == 10) {
                            clearInterval(er)
                            falg = true
                        }
                    }, 100)
                }, 1795)
                setTimeout(function(){
                    audio2.play()
                    sans[0].style.display='none'
                    feis.style.display='block'
                    feis.style.animationName='ft'
                    gz1s.style.display='none'
                    gz2s.style.display='block'
                    gz2s.style.animationName='gft'
                    boxs.style.backgroundImage='url(../image/bg.jpg)'
                    boxs.style.animationName='ddd'
                    twos.style.animation='decline 6s linear forwards'
                    bt3s.style.display='none'
                },2900)
                setTimeout(function(){
                    threes.style.display='block'
                },7500)
            }
        }
    }
    setTimeout(function(){
        wbs.style.animationName='xs'
    },1500)
    setTimeout(function(){
        jts.style.animationName='xs'
    },1000)
}