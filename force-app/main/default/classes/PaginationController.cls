public with sharing class PaginationController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
        return [Select id,name,Account.Name,StageName,CloseDate from Opportunity limit 32];

    

    }
}
