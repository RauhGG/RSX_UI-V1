print("[~r~R~y~U~r~I~w~] Client loaded")

CreateThread(function()
    while true do
        TriggerEvent('esx_status:getStatus', 'hunger', function(status)
            hunger = status.val / 10000
        end)
        TriggerEvent('esx_status:getStatus', 'thirst', function(status)
            thirst = status.val / 10000
        end)
        SendNUIMessage({
            food = hunger,
            water = thirst,
            o2 = GetPlayerUnderwaterTimeRemaining(PlayerId()) * 10,
            health = (GetEntityHealth(PlayerPedId()) -100)
        })
        Wait(800)
    end
end)
