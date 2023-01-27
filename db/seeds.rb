require "csv"


CSV.foreach( 'lib/tasks/firework_database_with_headers.csv', headers: true, :encoding => 'ISO-8859-1') do  |row|
    Firework.create!(
    quantity_per_case: row['quantity_per_case'],
    upc_code: row['upc_code'],
    name: row['name'],
    case_id: 1
    ) 
end


p "loaded #{Firework.count} fireworks"