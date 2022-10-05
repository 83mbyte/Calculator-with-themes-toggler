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
  const [var1, setVar1] = useState('');
  const [var2, setVar2] = useState('');
  const [isMathOperator, setIsMathOperator] = useState(false);

  const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const mathSigns = ['+', '-', '/', 'x'];

  const clickBtnHandler = (data) => {
    if ((numbersArray.indexOf(data) !== -1) && !isMathOperator) {
      if (currentResult === '0' && data !== '.') {
        setCurrentResult(data);
      } else {
        if (currentResult.length < 12) {
          setCurrentResult(currentResult + data)
        }
      }

    } else if ((numbersArray.indexOf(data) !== -1) && isMathOperator) {
      if (data === '.') {
        setCurrentResult('0' + data);
        setIsMathOperator(false)
      } else {
        setCurrentResult(data);
        setIsMathOperator(false)
      }
    }

    if (mathSigns.indexOf(data) !== -1) {
      setIsMathOperator(true);
      setVar1(currentResult);
      if (data === 'x') {
        data = '*';
      }
      setVar2(data);
      setCurrentResult(data);
    }

    if (data === '.') {
      if (currentResult === '0' || (currentResult.indexOf('.') === -1)) {
        setCurrentResult(currentResult + data);
      }
    }

    if (data === '=') {
      let result = null;
      let errorMessage = null;
      setIsMathOperator(false)
      try {
        result = Mexp.eval(`${var1}${var2}${currentResult}`);
      } catch (error) {
        errorMessage = error.message;
      }

      if (!isFinite(result)) {
        setCurrentResult(`Error:: ${errorMessage ? errorMessage : result}`);
      } else if (result === undefined || errorMessage !== null || isNaN(result)) {
        setCurrentResult(`Error:: ${errorMessage ? errorMessage : "Try again."}`);
      } else {
        if (result.toString().length > 14) {
          setCurrentResult(result.toFixed(5));
          // setCurrentResult('too long string..');
          console.log(result)

        } else {
          setCurrentResult(result);
        }

      }
    }

    if (data === 'RESET') {
      setIsMathOperator(false);
      setCurrentResult('0');
      setVar1('');
      setVar2('');
    }

    if (data === 'DEL') {
      if ((currentResult.toString().length > 1) && (currentResult.toString().includes('Error') !== true)) {
        setCurrentResult(currentResult.toString().slice(0, currentResult.toString().length - 1));
      } else {
        setCurrentResult('0');
      }
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
