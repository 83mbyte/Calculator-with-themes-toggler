import { useState } from 'react';

import MainWrapper from './Wrappers/MainWrapper/MainWrapper';

import useTheme from './hooks/useTheme';
import HeaderCalc from './components/HeaderCalc';
import ResultScreen from './components/ResultScreen';
import Keypad from './components/Keypad';
import Mexp from 'math-expression-evaluator';

function App() {

  const { setTheme } = useTheme();
  const [currentResult, setCurrentResult] = useState('0');
  const [isCalculated, setIsCalculated] = useState(false);


  const calcResult = () => {
    let result = null;
    let errorMessage = null;
    try {
      result = Mexp.eval(currentResult);
    } catch (error) {
      errorMessage = error.message;

    }

    if (!isFinite(result)) {
      setCurrentResult(`Error:: ${errorMessage ? errorMessage : "Dividing by ZERO "}`);
    } else if (result === undefined || errorMessage !== null || isNaN(result)) {
      setCurrentResult(`Error:: ${errorMessage ? errorMessage : "Try again."}`);
    } else {
      if (result.toString().length > 14) {
        setCurrentResult(result.toFixed(13));
      } else {
        setCurrentResult(result);
      }

    }
    setIsCalculated(true);
  }

  const clickBtnHandler = (data) => {

    switch (data) {
      case 'RESET':
        setIsCalculated(false);
        setCurrentResult('0');
        break;

      case 'DEL':
        setIsCalculated(false);
        if ((currentResult.toString().length > 1) && (currentResult.includes('Error') !== true)) {
          setCurrentResult(currentResult.toString().slice(0, currentResult.toString().length - 1));
        } else {
          setCurrentResult('0');
        }
        break;

      case '.':
        if (currentResult.length !== 14) {
          setCurrentResult(currentResult + ',')
        }
        break;

      case '+':
        setIsCalculated(false);
        if (currentResult[currentResult.length - 1] !== '+') {
          setCurrentResult(currentResult + data);
        }
        break;

      case '-':
        setIsCalculated(false);
        if (currentResult === '0') {
          setCurrentResult(data);
        } else if (currentResult[currentResult.length - 1] !== '-') {
          setCurrentResult(currentResult + data);
        }
        break;
      case '/':
        setIsCalculated(false);
        if (currentResult[currentResult.length - 1] !== '/') {
          setCurrentResult(currentResult + data);
        }
        break;
      case 'x':
        setIsCalculated(false);
        setCurrentResult(currentResult + '*');
        break;
      case '=':
        calcResult();
        break;
      default:
        if (currentResult.length < 15) {
          if (isCalculated == true) {
            setIsCalculated(false);
            setCurrentResult(data);

          } else if (currentResult === '0') {
            setCurrentResult(data)
          } else {
            setCurrentResult(currentResult + data)
          }
        }
        break;
    }
  }

  return (

    <MainWrapper>

      <header>
        <HeaderCalc setTheme={setTheme} />
      </header>

      <main>
        <ResultScreen data={currentResult} />
        <Keypad clickBtnHandler={clickBtnHandler} />
      </main>


    </MainWrapper>

  );
}

export default App;
