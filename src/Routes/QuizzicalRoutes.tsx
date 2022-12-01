import { useReducer, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import QuizzicalHomePage from '../Pages/QuizzicalHome.page';
import QuizzicalQuizPage from '../Pages/QuizzicalQuiz.page';

import { quizzicalReducer, quizReducer } from '../Reducers';
import { Quizzical, QuizzicalQuiz } from '../Types';
import { QuizEnum } from '../Enums';

const QuizzicalRoutes = () => {

    // Quizzical State
    const quizzical: Quizzical = {
        api: "https://opentdb.com/api.php?amount=5",
        form: {
            amount: "5",
            category: "",
            difficulty: "",
            type: ""
        }
    }
    const [state, dispatch] = useReducer(quizzicalReducer, quizzical);

    // Quizzical Quiz State
    const quiz: QuizzicalQuiz = {
        questions: [],           
        submittedQuiz: false,                 
        failedSubmit: false,         
        numCorrect: 0,
    }
    const [quizState, quizDispatch] = useReducer(quizReducer, quiz);

    // If there are no questions, get questions
    useEffect(() => {
        if(quizState.questions.length === 0) {
            getQuestions();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizState.questions.length]);

    // Get Questions
    const getQuestions = () => {
        fetch(state.api).then(res => res.json()).then(database => 
            quizDispatch({ type: QuizEnum.SetUp, database: database.results })
        );
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    

    // Quizzical Pages
    return (
        <Routes>
            <Route path="home" element={
                    <QuizzicalHomePage 
                        state={state}
                        dispatch={dispatch}
                        getQuestions={getQuestions}
                    />
                }
            />
            <Route path="quiz" element={
                    <QuizzicalQuizPage 
                        state={state}
                        dispatch={dispatch}
                        quizState={quizState}
                        quizDispatch={quizDispatch}
                        getQuestions={getQuestions}
                    />
                }
            />
            <Route path="*" element={ <Navigate to="home" /> } />
        </Routes>
    );
};

export default QuizzicalRoutes;
