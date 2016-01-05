

-- -----------------------------------------------------
-- Table `WattThePark`.`Machine`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Machine` ;

CREATE TABLE IF NOT EXISTS `Machine` (
  `idMachine` INTEGER NOT NULL  ,
  `name` VARCHAR(45) NULL ,
  `location` VARCHAR(45) NULL ,
  `type` VARCHAR(45) NULL ,
  PRIMARY KEY (`idMachine`)  );


-- -----------------------------------------------------
-- Table `WattThePark`.`Result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Result` ;

CREATE TABLE IF NOT EXISTS `Result` (
  `idResult` INTEGER NOT NULL  ,
  `idMachine` INTEGER NOT NULL ,
  `time` INTEGER NOT NULL ,
  `feedback` VARCHAR(1000) NULL ,
  `currentGenerated` FLOAT NULL ,
  `score` MEDIUMTEXT NULL ,
  `nameUser` VARCHAR(45) NULL ,
  `dateBegin` DATE NULL ,
  `dateEnd` DATE NULL ,
  PRIMARY KEY (`idResult`)  );
