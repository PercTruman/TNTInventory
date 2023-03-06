require "csv"

num = 1
until (num == 11) do
    Pod.create!(
        number: num
    )
    num +=1 

end
p "built #{Pod.count} pods"

CSV.foreach( 'lib/tasks/cases.csv', headers: true, :encoding => 'ISO-8859-1') do  |row|
    Case.create!(
     jde_number: row['jde_number'],
     firework_name: row['firework_name'],
     quantity_in_pod: 1,
     pod_id: 1,
    #  order_id: 1
     ) 
 end
 p "loaded #{Case.count} cases"

 CSV.foreach( 'lib/tasks/firework_database_with_headers.csv', headers: true, :encoding => 'ISO-8859-1') do  |row|
    Firework.create!(
    quantity_per_case: row['quantity_per_case'],
    upc_code: row['upc_code'],
    name: row['name'],
    case_id: 1
    ) 
end
p "loaded #{Firework.count} fireworks"