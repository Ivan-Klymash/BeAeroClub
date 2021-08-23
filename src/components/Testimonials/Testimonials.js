/* eslint-disable no-unused-vars */
import { TextField, Button } from '@material-ui/core'
import { Card, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    cardWrap: {
        margin: '20px 0',
        padding: 10,
    },
    inputField: {
        marginBottom: 20,
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
            <h2>Testimonials</h2>
            {testimonials.map(({ name, text }, i) => (
                <Card key={i} className={classes.cardWrap}>
                    <h4>{name}</h4>
                    <p>{text}</p>
                </Card>
            ))}

            <form onSubmit={onSend}>
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
            </form>
        </>
    )
}

export default Testemonials
