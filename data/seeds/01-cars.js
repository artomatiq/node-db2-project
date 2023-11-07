const cars = [
    {
        vin: '37465736473647364',
        make: 'Mercedes',
        model: 'GT',
        mielage: 34000,
        title: 'clean'
    },
    {
        vin: '73657364738273647',
        make: 'Acura',
        model: 'TL',
        mielage: 234789
    },
    {
        vin: '73647263746372637',
        make: 'BMW',
        model: 'M4',
        mielage: 3000,
        title: 'salvage',
        transmission: 'manual'
    },
    {
        vin: '92837465738473829',
        make: 'Infinity',
        model: 'Q60',
        mielage: 12000,
        transmission: 'automatic'
    }
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}

/*
    exports.seed = function (knex) {
    return knex('cars').truncate()
        .then(()=>{
            return knex('cars').insert(cars)
        })
}
*/

