# URLs
    - Uniform Resource Locator (address where data is stored on the web)

    # Base Url
        - www.amazon.com
    
    # Endpoint (setup to accept a parameter)
        - /clothing/jackets

    # Parameter (placeholder for data, used for requesting sepcific resources from a database (usually an ID))
        -/clothing/jackets/:_id
        -/clothing/jackets/fdsf7e48sdf
    
    # Query (query strings) (finding something specific)
        - www.amazon.com/clothing/jackets?[add key value pairs]color=black&type=leather

        const query = {
            color: black, 
            type: leather
        }
