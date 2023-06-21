/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/*.js'],
  theme: {
    screens:{
      sm:'480px',
      ms:'750px',
      md:'847px',
      lm:'888px',
      lg:'976',
      xl:'1440'
    },
    extend: {
      colors:{
        primaryGreen:'#0a8543',
        primaryWhite:'#fff',
        headerThree:'rgb(13, 51, 63)',
        darkBlue:'#0d333f',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlueDeep: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        
        color:'#333',
        backgroundColor: '#fff1bd',
        border: '#111460',
        boxShadow:'#111460',
  
    Green01: '#108000',
    Green1:'#0d7300',
    Green02:'#2ca01c',
    Green2: '#0e8900',
    Green3: '#53b700',
    Green4: '#7fd000',
    Green5: '#a9e838',
    Greenmint: '#94f8ba',
    GreenGreen: '#0fd46c',
    Greendark: '#0a8543',
    Greendarker: '#086d37',
    Greenlight: '#e8f5e3',
    Greenqrc: '#009633',
    Grey1: '#393a3d',
    Grey2: '#6b6c72',
    Grey3: '#8d9096',
    Grey4: '#babec5',
    Grey5: '#d4d7dc',
    Grey6: '#e3e5e8',
    Grey7: '#eceef1',
    Grey8: '#f4f5f8',
    GreyGrey1: '#e5e5e5',
    GreyGrey2: '#f7f8f3',
    GreyGrey3: '#ddd',
    GreyGrey: '#c4c4c4',
    GreydarkGrey: '#babec5',
    Greytofu: '#f3f2ef',
    Greydarktofu: '#e2e0db',
    red1: '#b80000',
    red2: '#d52b1e',
    redlight: '#e6bcb9',
    red3: '#dd2366',
    blue0: '#053d6d',
    blue1: '#055393',
      }
    },
  },
  plugins: [],
}

