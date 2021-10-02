/* eslint-disable no-unused-vars */
import { TextField, Button } from '@material-ui/core'
import { Card, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    cardWrap: {
        margin: '20px',
        padding: 10,
    },
    inputField: {
        marginBottom: 24,
        textTransform: 'capitalize',
        boxShadow: '8px 8px 8px rgba(0,0,0,0.7)',
    },
})

const Testemonials = () => {
    const classes = useStyles()

    const arrTestimonials = [
        {
            name: 'Софія',
            text: 'Прекрасні враження))) ми були з дітьми, вони у захваті! Доторкнулися до легенди України, першого зареєстрованого літака! Пілот Генадій неперевершений! Дякуємо!',
        },
        {
            name: 'Тетяна',
            text: 'Це було надзвичайно круто! Мальовнича місцевість, чарівна інструктор, все розказала, показала, круті квадрики, є форма, шоломи, рукавиці, все що необхідно, ми дуже задоволені і обовязково приїдемо ще)',
        },
    ]

    const [testimonials, setTestimonials] = useState(arrTestimonials)

    const [newTestimonials, setNewTestimonials] = useState({
        name: '',
        text: '',
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name: e.target.value,
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text: e.target.value,
        }))
    }

    const onSend = (e) => {
        e.preventDefault()
        setNewTestimonials({
            name: '',
            text: '',
        })
        setTestimonials((value) => {
            return [...value, newTestimonials]
        })
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', marginTop: 30 }}>
                Testimonials:
            </h2>
            {testimonials.map(({ name, text }, i) => (
                <Card key={i} className={classes.cardWrap}>
                    <h4>{name}</h4>
                    <p>{text}</p>
                </Card>
            ))}
            <hr />

            <form
                onSubmit={onSend}
                style={{
                    margin: '0px 20px',
                    border: '20px solid white',
                    borderRadius: '10px',
                    borderImage:
                        'repeating-linear-gradient(30deg, #4d9f0c, #9198e5, #4d9f0c 20px) 60',

                    // backgroundColor: 'rgb(208, 221, 238)',
                    textAlign: 'center',
                }}
            >
                <p style={{ fontSize: 17 }}>Leave your feedback:</p>
                <div>
                    <TextField
                        label="Your name"
                        variant="outlined"
                        className={classes.inputField}
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <TextField
                        label="You comment"
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        variant="outlined"
                        className={classes.inputField}
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                    />
                </div>
                <Button
                    variant="outlined"
                    className={classes.inputField}
                    type="submit"
                >
                    Leave a comment
                </Button>
                <p>
                    <i>Thanks for the feedback. You help us become better.</i>
                </p>
            </form>
        </>
    )
}

export default Testemonials
