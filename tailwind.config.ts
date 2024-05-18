import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E9FAFB',
          100: '#D4F5F7',
          200: '#A4EAEE',
          300: '#79DFE7',
          400: '#4ED5DF',
          500: '#26C6D0',
          600: '#1F9FA8',
          700: '#17767D',
          800: '#0F4D52',
          900: '#08292B',
          950: '#041416',
          DEFAULT: '#26C6D0'
        },
        secondary: {
          50: '#EDEDF3',
          100: '#DBDBE6',
          200: '#B9B9CF',
          300: '#9595B6',
          400: '#74749F',
          500: '#585880',
          600: '#474767',
          700: '#34344C',
          800: '#232333',
          900: '#111118',
          950: '#08080C',
          DEFAULT: '#585880'
        },
        accent: {
          50: '#FDF1F4',
          100: '#FCE4E9',
          200: '#F8C4D0',
          300: '#F5A8BA',
          400: '#F188A1',
          500: '#EE6C8A',
          600: '#E72D58',
          700: '#BB163C',
          800: '#7B0E28',
          900: '#400715',
          950: '#20040A',
          DEFAULT: '#EE6C8A'
        }
      }
    }
  }
}
