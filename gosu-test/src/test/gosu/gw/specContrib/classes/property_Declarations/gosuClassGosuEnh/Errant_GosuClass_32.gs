package gw.specContrib.classes.property_Declarations.gosuClassGosuEnh

class Errant_GosuClass_32 {
  function getNormalProperty() : String { return null }
  function setNormalProperty(s : String){}

  //Should not show error as the function generated by property will be getsmallCaseProperty3() with small 's'
  function getSmallCaseProperty1() : String { return null }
  function setSmallCaseProperty1(s : String){}

  function getsmallCaseProperty2() : String { return null }
  function setsmallCaseProperty2(s : String){}

  //Should not show error as the function generated by property will be getSmallCaseProperty3() with Capital 'S'
  function getsmallCaseProperty3() : String { return null }
  function setsmallCaseProperty3(s : String){}

  function getOnlyGetter1() : String { return null }

  function setOnlySetter1(s : String) { }
}