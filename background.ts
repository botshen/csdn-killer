chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        "id": 1,
        "priority": 1,
        "action": {
          "type": chrome.declarativeNetRequest.RuleActionType.REDIRECT,
          "redirect": { 
            "regexSubstitution": "\\1+-csdn"
          }
        },
        "condition": {
          "regexFilter": "(.*[?&]q=)([^&]*)",
          "resourceTypes": [chrome.declarativeNetRequest.ResourceType.MAIN_FRAME]
        }
      }
    ]
  });
});

