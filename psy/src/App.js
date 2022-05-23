import './App.css';
import React, { useState } from "react";

const QUESTIONS = [
    "Я всегда сочувствую своему ребенку",
    "Я считаю своим долгом знать все, о чем думает мой ребенок",
    "Мне кажется, что поведение моего ребенка значительно отклоняется от нормы",
    "Нужно подольше держать ребенка в стороне от реальных жизненных проблем, если они его травмируют",
    "Я испытываю к ребенку чувство симпатии",
    "Я уважаю своего ребенка",
    "Хорошие родители ограждают ребенка от трудностей жизни",
    "Мой ребенок часто мне неприятен",
    "Я всегда стараюсь помочь своему ребенку",
    "Бывают случаи, когда недоброе отношение к ребенку приносит ему пользу",
    "По отношению к своему ребенку я испытываю досаду",
    "Мой ребенок ничего не добьется в жизни",
    "Мне кажется, что другие дети потешаются над моим ребенком",
    "Мой ребенок часто совершает такие поступки, которые заслуживают осуждения",
    "Мой ребенок отстает в психологическом развитии и для своего возраста выглядит недостаточно развитым",
    "Мой ребенок специально ведет себя плохо, чтобы досадить мне",
    "Мой ребенок, как губка, впитывает в себя все самое плохое",
    "При всем старании моего ребенка трудно научить хорошим манерам",
    "Ребенка с детства следует держать в жестких рамках, только тогда из него вырастет хороший человек",
    "Я люблю, когда друзья моего ребенка приходят к нам в дом",
    "Я всегда принимаю участие в играх и делах ребенка",
    "К моему ребенку постоянно «липнет» все дурное",
    "Мой ребенок не добьется успехов в жизни",
    "Когда в компании говорят о детях, мне становится стыдно, что мой ребенок не такой умный и способный, как другие дети",
    "Я жалею своего ребенка",
    "Когда я сравниваю своего ребенка со сверстниками, то они кажутся мне воспитаннее и разумнее, чем мой ребенок",
    "Я с удовольствием провожу с ребенком свое свободное время",
    "Я часто жалею о том, что мой ребенок взрослеет, и с нежностью вспоминаю то время, когда он был еще совсем маленьким",
    "Я часто ловлю себя на том, что с неприязнью и враждебно отношусь к ребенку",
    "Я мечтаю о том, чтобы мой ребенок достиг того, что лично мне не удалось в жизни"
];

function App() {

    const [userAnswers, setUserAnswers] = useState([]);

    const submitHandler = () => {
        // alert("clicked!");
        console.log(userAnswers);
    }

    const choseHandler = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const newUserAnswers = userAnswers;
        newUserAnswers[event.target.name] = event.target.value;

        setUserAnswers(newUserAnswers);
    }

    return (
        <div className="App">
            <h1>Пройди тест и узнай о себе всю правду!</h1>
            {QUESTIONS.map( (elem, index) => {
                return <Question    
                    question={elem} 
                    name={index}
                    key={index}
                    onChangeFunction={choseHandler}
                    />
            })}
            {/* <Question question="вапрос номер адын"/> */}

            <input 
                type="submit" 
                value="Посмотреть результат" 
                className="button"
                onClick={submitHandler}
            />
        </div>
    );
}

const Question = (props) => {
    return(
        <div className="question-item">
            <p className="question">{props.question}</p>
            <label >
                <input 
                    type="radio" 
                    className="option" 
                    value={1} 
                    name={props.name} 
                    onChange={props.onChangeFunction}
                /> 
                Да
            </label>
            <br />
            <label>
                <input type="radio" className="option" value={0} name={props.name} onChange={props.onChangeFunction}/>
                Нет
            </label>
            <br />
            {/* <label>
                <input type="radio" className="option" value={props.answer3} name={props.name} onChange={props.onChangeFunction}/>
                {props.answer3}
            </label> */}
            
        </div>
    )
}

export default App;
