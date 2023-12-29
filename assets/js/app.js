const main_box = document.querySelector(".main-box");
const endpoint_fragment = document.querySelector("#endpoint_fragment");

const endpoint_list = [
    {
        title: "Authentification",
        all_method: [
            {
                type: "POST",
                link: "/api/users/login",
                description: "Connecter un utilisateur",
                parameters: [
                    {
                        name: "email",
                        description: "Adresse email de l'utilisateur voulant s'authentifier",
                        Type: "String",
                    },
                    {
                        name: "password",
                        description: "Mot de Passe de l'utilisateur voulant s'authentifier",
                        Type: "String",
                    },
                ],
                response_code: `{
                    "user": {
                        "uid": "M3OuVT9kwyU5ITZvw1UYWgq4tE42",
                        "email": "polarodrigue@gmail.com",
                        "emailVerified": false,
                        "isAnonymous": false,
                        "photoURL": "https://image.com",
                        "phoneNumber": "+237690355532",
                        "providerData": [
                            {
                                "providerId": "phone",
                                "uid": "+237690355532",
                                "displayName": null,
                                "email": null,
                                "phoneNumber": "+237690355532",
                                "photoURL": null
                            },
                            {
                                "providerId": "password",
                                "uid": "polarodrigue@gmail.com",
                                "displayName": null,
                                "email": "polarodrigue@gmail.com",
                                "phoneNumber": null,
                                "photoURL": "https://image.com"
                            }
                        ],
                        "stsTokenManager": {
                            "refreshToken": "AMf-vBwmSq9uzjvXFg6grYcErff-fjkWRh-7SQfkMXM7hOUR6z4G3Bcsbm5QZlEYWX4fp6qsOCnxvIasTQD2Dk7udNKU6djEzqCxVEJ_aZVj3l-rqVB_syPmg7GCN46F1d65izlHwvFaQ3S3EcOiTG7CcsH-oXX9qcKLr2FbWmUjc_bJLaov_SuJCnxbuBjfFCdJEgn1UGqK5AK_6KFlWw6n_diLAfUoj6Sv9HZzGITXXy0j7r0QfHA",
                            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzMmNjMWNiMjg5ZGQ0NjI2YTQzNWQ3Mjk4OWFlNDMyMTJkZWZlNzgiLCJ0eXAiOiJKV1QifQ.eyJwaWN0dXJlIjoiaHR0cHM6Ly9pbWFnZS5jb20iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWFkZWEtZWF0LXBsYXRlZm9ybWUiLCJhdWQiOiJtYWRlYS1lYXQtcGxhdGVmb3JtZSIsImF1dGhfdGltZSI6MTcwMzgwODQyMiwidXNlcl9pZCI6Ik0zT3VWVDlrd3lVNUlUWnZ3MVVZV2dxNHRFNDIiLCJzdWIiOiJNM091VlQ5a3d5VTVJVFp2dzFVWVdncTR0RTQyIiwiaWF0IjoxNzAzODA4NDIyLCJleHAiOjE3MDM4MTIwMjIsImVtYWlsIjoicG9sYXJvZHJpZ3VlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfbnVtYmVyIjoiKzIzNzY5MDM1NTUzMiIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicG9sYXJvZHJpZ3VlQGdtYWlsLmNvbSJdLCJwaG9uZSI6WyIrMjM3NjkwMzU1NTMyIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oA3Wf0iIwaMBkct7c0XPaQwsnVtlID8qMPrEB_IswYLL_BJfMjqL0M2GccCm-1vlOHaSsurIkzjEiqRgG6i_2kBUFv9YVC-y3jpPdn9CHN2mYMP8rtQL1xBQbMh0DBGa7lrguxblIOuYvbhulZrDxTHPxNTQSYI_FnvkoQuSM7E-SnSXp_VXMOvQ3khw7VcXpjv2QiYzLVOjGvEAZO_f3D33GwJmmID8te9PafNBEKai-sCk5fIdKXwcYgSSqDRpy_5UOZfl28qSLjygMyrs06tUr6f63QU52W0F0UoByi7s876HWKA8o1ab2kd6_A5rZ9CxID2XMTEbH1Rxnlpo5Q",
                            "expirationTime": 1703812023049
                        },
                        "createdAt": "1703797624345",
                        "lastLoginAt": "1703808422981",
                        "apiKey": "AIzaSyCsjvonnBpWwFgFITpgz45qJMVsq1Vh_oU",
                        "appName": "[DEFAULT]"
                    }
                }`,
            },
            {
                type: "POST",
                link: "/api/users/",
                description: "Enregistrer un utilisateur",
                parameters: [
                    {
                        name: "displayName",
                        description: "Nom complet de l'utilisateur",
                        Type: "String",
                    },
                    {
                        name: "email",
                        description: "Adresse email de l'utilisateur",
                        Type: "String",
                    },
                    {
                        name: "password",
                        description: "Mot de Passe de l'utilisateur",
                        Type: "String",
                    },
                    {
                        name: "phoneNumber",
                        description: "Numero de telephone de l'utilisateur(doit contenir l'indicatif du pays Ex: +237)",
                        Type: "String",
                    },
                    {
                        name: "photoURL",
                        description: "Url complete de la photo de profil de l'utilisateur",
                        Type: "String",
                    },
                ],
                response_code: `{
                    "message": "User has been created with id: M3OuVT9kwyU5ITZvw1UYWgq4tE42"
                }`,
            },
            {
                type: "GET",
                link: "/api/users/",
                description: "récupérer les infos de l'utilisateur connecter",
                response_code: `{
                    "user": {
                        "uid": "DUsaHzCCIUd7W4R436eVFNRlRYO2",
                        "email": "nouemssiismael@gmail.com",
                        "emailVerified": false,
                        "disabled": false,
                        "metadata": {
                            "lastSignInTime": "Thu, 28 Dec 2023 20:55:11 GMT",
                            "creationTime": "Thu, 28 Dec 2023 12:14:53 GMT",
                            "lastRefreshTime": "Thu, 28 Dec 2023 20:55:11 GMT"
                        },
                        "tokensValidAfterTime": "Thu, 28 Dec 2023 12:14:53 GMT",
                        "providerData": [
                            {
                                "uid": "nouemssiismael@gmail.com",
                                "email": "nouemssiismael@gmail.com",
                                "providerId": "password"
                            }
                        ]
                    }
                }`,
            },
        ]

    },
    {
        title: "Restaurants",
        all_method: [
            {
                type: "GET",
                link: "/api/restaurants/",
                description: "récupérer tous les restaurants d'un utilisateur",
                response_code: `{
                    "message": "Ne fonctionne pas encore pour le moment"
                }`,
            },
            {
                type: "GET",
                link: "/api/restaurants/{restaurantId}",
                description: "récupérer les infos d'un restaurant",
                response_code: `{
                    "id": "FLqG9BKsV17VyPv08TrF",
                    "data": {
                        "name": "Ismael Food"
                    }
                }`,
            },
            {
                type: "POST",
                link: "/api/restaurants/",
                description: "Créer un restaurant",
                parameters: [
                    {
                        name: "name",
                        description: "Nom du restaurant",
                        Type: "String",
                    },
                    {
                        name: "email",
                        description: "Adresse email du restaurant",
                        Type: "String",
                    },
                    {
                        name: "phoneNumber",
                        description: "Numero de telephone du restaurant",
                        Type: "String",
                    },
                    {
                        name: "photoURL",
                        description: "Url complete de la photo de profil du restaurant",
                        Type: "String",
                    },
                ],
                response_code: `{
                    "message": "Restaurant has been created with id: 7Up0EFMUt7pAV55HmW4O"
                }`,
            },
            {
                type: "PUT",
                link: "/api/restaurants/{restaurantId}",
                description: "Modifier les infos d'un restaurant",
                parameters: [
                    {
                        name: "name",
                        description: "Nouveau Nom du restaurant",
                        Type: "String",
                    },
                    {
                        name: "email",
                        description: "Nouvelle Adresse email du restaurant",
                        Type: "String",
                    },
                    {
                        name: "phoneNumber",
                        description: "Nouveau Numero de telephone du restaurant",
                        Type: "String",
                    },
                    {
                        name: "photoURL",
                        description: "Nouvelle Url complete de la photo de profil du restaurant",
                        Type: "String",
                    },
                ],
                response_code: `{
                    "message": "Restaurant has been modified"
                }`,
            },
        ]
    },
];

function cloneTemp(template_id) {
    const template = document.getElementById(template_id);
    return template.content.cloneNode(true);
}

endpoint_list.forEach((endpoint) => {
    const endpointBox = cloneTemp("endpoint_fragment");
    endpointBox.querySelector(".endpoint-title").innerText = endpoint.title;
    const endpoint_items = endpointBox.querySelector(".endpoint-items");
    endpoint.all_method.forEach((m) => {
        const endpoint_item = cloneTemp("endpoint_item_fragment");
        endpoint_item.querySelector(".endpoint-item-type").innerText = m.type;
        endpoint_item.querySelector(".endpoint-item-link").innerText = m.link;
        endpoint_item.querySelector(".endpoint-item-description").innerText = m.description;
        const endpoint_item_parameters = endpoint_item.querySelector(".endpoint-item-parameters");
        if (m.parameters) {
            m.parameters.forEach((p) => {
                const tbody = endpoint_item_parameters.querySelector(".dynamic_table tbody");
                tbody.innerHTML += `<tr>
                <td>${p.name}</td>
                <td>${p.description}</td>
                <td>${p.Type}</td>
                </tr>`
            })
        } else {
            endpoint_item_parameters.querySelector(".dynamic_table").innerHTML = "<div class='no_data'>Aucun Paramètres Nécessaire</div>";
        }
        endpoint_item.querySelector(".endpoint-item-code").innerText = m.response_code;
        endpoint_items.appendChild(endpoint_item);
    });
    endpointBox.appendChild(endpoint_items);
    main_box.appendChild(endpointBox);
});