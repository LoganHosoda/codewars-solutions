const stringClean = s => s.split('').filter(c => isNaN(parseInt(c))).join('')
