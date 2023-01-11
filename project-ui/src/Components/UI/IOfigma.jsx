import React from 'react'
import styles from '../CSS/IOfigma.module.css'

const IOfigma = () => {
  return (
    <div className={styles.container}>

        <div className={styles.compHeader}>
            <img src="../CSS/Vector.png"/>
            <p className={styles.compName}>Culinary kitchen</p>
        </div>

        <div className={styles.compVarities}>

            <div className={styles.varitiesSection}>
                <div><p className={styles.HeadVarities}>V A R I T I E S</p></div>

                <div className={styles.Varities}>
                    <div className={styles.VaritiesLine}></div>
                </div>
            </div>

            <div className={styles.varitiesBox}>
                <div className={styles.varitiesBoxOne}>
                    <img 
                    className='imgvaritiesBoxOne'
                    src="https://s3-alpha-sig.figma.com/img/65f3/bdfc/9c473810f81aa30acad4a050beba8cf9?Expires=1674432000&Signature=GhWtNXVwZsKMlIJ4nH94l8PJkwjaxRBeucb2AsjD13ztIK8Usw8fnuI1BNS9Qb6qCjEt7GxR3AnO9hccctrc3Apc5F-4nquy9oG-dzTyedhMfcthqv3Y5rKe1wqmksb35~9LvLHiBP9KDRetMjI57m59VbjO5vzi~v1gAvQbg0WSg0ZKhkT8YN7aQuibAMLDEbYptw0bPEthnxNyGRU6Tau-wNK~LfhcrLzHhHZd6eIZqWBIDFUwRTjijNL5BZe3ELrt6~HWijLFx-WpWRoOYEYfAlJpCgHi66xkk3ZKAE1vKHS7hDUwhtVFPW41ncQiiswOpxkyN4Ivo1Lgby~j7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                
                <div className={styles.varitiesBoxTwo}>
                    {/* <img src="https://s3-alpha-sig.figma.com/img/749d/a788/04eec019f700b151c1c59b96683121f5?Expires=1674432000&Signature=WLaEky6fOO9wAwg1kYsN5M7iKw7LI4y8rliSqZJ~wLroJ61ARrbx0YhEjOeO3iHmPccXT6WW5LWUjSPxmfNrTDgc4x2KLTZIttpFLA9MInNEeTpVzBEo7x1sfJweDqcKP97sio9rEk4JvBFaThYfwb5sTGZfDiIfRlfiWizq9h6iDYErI3EL8lHufJa-fLPvTdpNzjemv6dWzjY-WojjtNmfZQ8GAg9L~2t~2etMDtFdzG5xtYsQRrvAThcXGk6moqFPCQSHpydhsvhIXgFvoVjCNE99OFLblITK9uOe6zhGslTa8DQA-KONIUG4O4cs7X7BAt8l5B~eb5ftc4AYLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/bfe4/7245/ddb5f574cc5caa7991dc3f591fad9496?Expires=1674432000&Signature=pgASc3ZEoO7F5H89gH7qlOUNt0n6hvkRYwSMZG6qV6w0pcIRnTF5DgTG6e92hakfFVEfed-odbxQ6zmY3ZYBQ~KwnbW88HE1CLmG-mpcz5vH688GhJ3jbF4UioULwu0xIaX63J4Q9alKrgfMMaTkS8vtToDjxaU4ez27quPlL5Y1-f1Bz1UNwLCbrAJq3smxFDqNw4~K8xGO~7q9lPjXZCqPfvoZe~O1a3uxrV7Aost98d7SmBrRoK~WXsQZ4Q6IbGY-QbhdP2HI4t0aJcZ0yBQHe4nG-Y1ftLHUdSa6qRnK4ZGapyLuQw3UF-cFvqKPUgdRA3N6312fkjaNbrnXSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/6814/0906/e59a9e28cf04ba871b8dab3cc0a54480?Expires=1674432000&Signature=UqMYBtoMv234pkaG9spFl7-s0s5YsBgvAgJ1XJjivaQwBdRyWMpZea1uZSZ4RuAuL5lswcEfy0m~RBPlvwJbk~BTqDMBGRAFmIht00rUbMM56BTNjKvnuzifik2ps~XQPdxwGv-9XBa3mV3qrZvC2RpPjIPpLKHPXDTS52nCk5uGsLrjSw0cqn7gAUEPY6FOWtLdRGhvTmezbX792PBT2G6qFEJGwtTEQaGLnCbLNrT8zWzoGh0pGBOapyitSfvjQ8REuwEZSEs~whK91-~TOM7-uRUwR3kMC0CAd0yl~dWicgkptzCmaWYHk7NlLEUu6l8RZHMLQMHfoP5OBAYYCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/eb40/98c4/f8513b6a569122d18ef709a90c0d80dd?Expires=1674432000&Signature=F1l9q-n7MMdQTx4k6mDRg3fM1GO979UJa2H7igtIZaRK2TveG7VHqfdc84pR8yowLRbrVT3NAlH2Ht8kSjcg8yXV6nyU5aXcWu0ZItkiT5CpqPbwHoNaswXbMEvZiq7t4f7byuAJ3FKwwfaBVFxR~ySVOrGXIs0A2NcNtbayByzGkI7x1Z-yVwFYrYXvhxRkT6dKSxC9SRLe1zZI5v0TcGz60Yr0bqYhE~reje6IRVFrTKNGZ7xoFTaJxWtH4osnqh0DIfIKTSUvINPel84XCXQaGblvXy~MrmigEm0jRN0H4VH4J3OKp0QgdgUUFxoKzZDunDjX8ya~IBq19O-Kxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /> */}
                </div>
            </div>

        </div>

    </div>
  )
}

export default IOfigma;