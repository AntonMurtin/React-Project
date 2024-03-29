export const admin = 'georgi@gmail.com';

export const productName = {
    waterpumps: 'Water Pump',
    irigationSystems: 'Irigation Systems',
    parts: 'Parts',
    powerMachines: 'Power Mashines',
    pipes: 'Pipes',
    tools: 'Tools',
    lastSeen: 'Last Seen',
}

export const productType = {
    waterpumps: 'waterpumps',
    irigationSystems: 'irigationSystems',
    parts: 'parts',
    powerMachines: 'powerMachines',
    pipes: 'pipes',
    tools: 'tools',
}

export const errorMessage = {
    name: "Name shoud be 3-16 characters and shouldn't include any special characters!",
    email: "It should be a valid email address",
    lastname: "Last Name shoud be 3-16 characters and shouldn't include any special characters!",
    password: "Username shoud be 6-15 characters and  include at least 1 letter, 1 number and 1 special characters!",
    confirmPassword: "Password don't match!",
    town: "Town is required!",
    phone: "It should be a valid phone number",
    street: "Street is required!",
    type: "Type is not selected ",
    title: "Title is required!",
    price: "Price must min 1",
    description: "Deacription is required!",
    image: "It should be a valid image"

}


export const inputValidtion = {
    password: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$',
    phone: '^([0]{1}[8]{1}[7-9]{1}[7-9]{1}[0-9]{6})',
    name: '^(?=.{3,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$',
    type: '^(?:^|(?<= ))(waterpumps|systems|parts|machines|pipes|tools [1-7]\d*$)(?:(?= )|$)',
    image: 'https?:\/\/.*\.(?:png|jpg|jpeg)'
}