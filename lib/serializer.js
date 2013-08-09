var Serializer = function () {
    /*
    result.EntityName = 'leadsrelation';
    result.EntityId = 'e21a10ec-8209-e111-8660-00155d31e39f';
    result.RelationShip = { PrimaryEntityRole : 'Referencing', SchemaName: 'connectionroleassociation_association'};
    result.RelatedEntities = [
        {
            Id : '29F08E80-4F2B-E111-BD15-00155D31F746',
            LogicalName : 'account',
            Name : 'account'
        }
    ];
    */
    this.toXmlAssociate= function(options) { 
        var xml = '' ;

        if (options.EntityName) {
            xml += "<entityName>"+ options.EntityName +"</entityName>";
        };

        if (options.EntityId) {
            xml += "<entityId>"+ options.EntityId +"</entityId>";
        };

        if (options.RelationShip) {
            if (options.RelationShip.PrimaryEntityRole && options.RelationShip.SchemaName)
                {
                    xml += "<relationship><b:PrimaryEntityRole>"+ options.RelationShip.PrimaryEntityRole + "</b:PrimaryEntityRole><b:SchemaName>" + options.RelationShip.SchemaName +"</b:SchemaName></relationship>";
                }
        };

        if (options.RelatedEntities) {
            var atts = options.RelatedEntities.map(function(c) {
                return '<b:EntityReference><b:Id>'+ c.Id + '</b:Id><b:LogicalName>'+ c.LogicalName +'</b:LogicalName><b:Name>' + c.Name + '</b:Name></b:EntityReference>';
            });
            xml += "<relatedEntities>" + atts.join('') + "</relatedEntities>";
        };

        return xml;
    }    
    /*
    {
        LogicalName : "?",
        Attributes : [ 
            {
                key: "x", 
                value: "y"
            } ],
        FormatedValues : [ 
            {
                key:"x", 
                value:"y"
            } ]
    }
    */
    this.toXmlCreateUpdate= function(options)
    {
        var xml = '' ;
        if (options.Attributes) {
            var atts = options.Attributes.map(function(c) {
                return '<b:KeyValuePairOfstringanyType><c:key>'+ c.key + '</c:key><c:value  i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">'+ c.value +'</c:value></b:KeyValuePairOfstringanyType>';

            });
            xml = "<b:Attributes>" + atts.join('') + "</b:Attributes>";
        };
        if (options.id) {
            xml += "<b:Id>"+ options.id +"</b:Id>";
        };

        if (options.FormatedValues) {
            var atts = options.FormatedValues.map(function(c) {
                return '<c:key>'+ c.key + '</c:key><c:value  i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">'+ c.value +'</c:value>';

            });
            xml += "<b:FormattedValues>" + atts.join('') + "</b:FormattedValues>";
        };

        if (options.LogicalName) {
            xml += "<b:LogicalName>"+ options.LogicalName +"</b:LogicalName>";
        };
        return xml;
    };

    /*
    {
       EntityName : "?",
       Id : "guid"
    }
    */
    this.toXmlDelete= function(options)
    {
        var xml='' ;
        if (options.EntityName) {
            xml += "<entityName>"+ options.EntityName +"</entityName>";
        };

        if (options.id) {
            xml += "<id>"+ options.id +"</id>";
        };
        return xml;
    };

    /*
    {
        RequestName : "?",
        RequestId : "guid",
        Parameters : [ 
            {
                key:"x", 
                value:"y"
            } ]
    }
    */
    this.toXmlExecute= function(options)
    {
        var xml='' ;
        
        if (options.RequestName) {
            xml = "<b:RequestName>"+ options.RequestName +"</b:RequestName>";
        };

        if (options.RequestId) {
            xml += "<b:RequestId>"+ options.RequestId +"</b:RequestId>";
        };

        if (options.Parameters) {
            var atts = options.Parameters.map(function(c) {
                return '<b:KeyValuePairOfstringanyType><c:key>'+ c.key + '</c:key><c:value  i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">'+ c.value +'</c:value></b:KeyValuePairOfstringanyType>';
            });
            xml += "<b:Parameters>" + atts.join('') + "</b:Parameters>";
        };

        return xml;
    };

    /* Para asociar y desasociar
    {
        EntityName: "?",
        EntityId: "guid",
        Relationship : 
            { 
                PrimaryEntityRole : "?", 
                SchemaName: "?" 
            },
        RelatedEntities: [ 
            { 
                Id : "guid", 
                LogicalName: "?", 
                Name : "?"  
            } ]
    }
    */
    this.toXmlAsociation= function(options)
    {
        var xml ;
        
        if (options.EntityName) {
            xml = "<b:entityName>"+ options.EntityName +"</b:entityName>";
        };

        if (options.EntityId) {
            xml += "<b:entityId>"+ options.EntityId +"</b:entityId>";
        };

        if (options.RelatedEntities) {
            var atts = options.RelatedEntities.map(function(c) { 
                return '<b:EntityReference><b:Id>'+ c.Id + '</b:Id><b:LogicalName>'+ c.LogicalName +'</b:LogicalName><b:Name>' + c.Name + '</b:Name></b:EntityReference>';
            });
            xml += "<relatedEntities>" + atts.join('') + "</relatedEntities>";
        };

        return xml;
    };

    this.toXmlRetrieveMultiple= function(options)
    {
        var xml ;

        if (options.EntityName) {
            xml = "<b:EntityName>"+ options.EntityName +"</b:EntityName>";
        };

        if (options.id) {
            xml += "<b:id>"+ options.id +"</b:id>";
        };

        if (options.ColumnSet) {
            var columset = options.ColumnSet.map(function(c){return "<c:string>"+c+"</c:string>"});
            xml += "<b:ColumnSet><b:AllColumns>false</b:AllColumns><b:Columns>" + columset.join('') + "</b:Columns></b:ColumnSet>";
        };

        if (options.Criteria) {
            if (options.Criteria.Conditions) {
                if (options.Criteria.Conditions.FilterOperators) {
                    var filters = options.Criteria.Conditions.FilterOperators.map(function(c){return '<c:FilterOperator>'+c+'</c:FilterOperator>'});
                    xml+='\n<b:Criteria><b:FilterOperator>' + filters.join('') + '</b:FilterOperator></b:Criteria>'
                };
            };
        };
        return xml;
    };

    this.toXmlRetrieve= function(options)
    {
        var xml ;

        if (options.EntityName) {
            xml = "<entityName>"+ options.EntityName +"</entityName>";
        };

        if (options.id) {
            xml += "<id>"+ options.id +"</id>";
        };

        if (options.ColumnSet) {
            var columset = options.ColumnSet.map(function(c){return "<c:string>"+c+"</c:string>"});
            xml += "<columnSet><b:AllColumns>false</b:AllColumns><b:Columns>" + columset.join('') + "</b:Columns></columnSet>";
        };
        return xml;
    };
};

module.exports = Serializer;