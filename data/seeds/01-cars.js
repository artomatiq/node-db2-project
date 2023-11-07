const cars = {
    {
        
    }
} 

exports.seed = function (knex) {
    knex.fruites.truncate()
    knex('cars').insert([

    ])
}